import { create } from 'zustand'

export type ExerciseType = 
  | 'escritura-libre' 
  | 'microcuentos' 
  | 'entorno' 
  | 'diario-de-personaje' 
  | 'reescritura-de-cuentos'

export interface Writing {
  id: string
  exerciseType: ExerciseType
  content: string
  wordCount: number
  charCount: number
  createdAt: Date
  metadata?: {
    duration?: number // para escritura libre (en segundos)
    mode?: string // para microcuentos (Intenso, Estándar, Expandido)
    [key: string]: unknown
  }
}

interface WritingStore {
  writings: Writing[]
  addWriting: (writing: Omit<Writing, 'id' | 'createdAt'>) => void
  removeWriting: (id: string) => void
  clearWritings: () => void
  getWritingsByExercise: (exerciseType: ExerciseType) => Writing[]
}

export const useWritingStore = create<WritingStore>((set, get) => ({
  writings: [],
  
  addWriting: (writing) => {
    const newWriting: Writing = {
      ...writing,
      id: crypto.randomUUID(),
      createdAt: new Date(),
    }
    
    set((state) => ({
      writings: [...state.writings, newWriting]
    }))
  },
  
  removeWriting: (id) => {
    set((state) => ({
      writings: state.writings.filter((w) => w.id !== id)
    }))
  },
  
  clearWritings: () => {
    set({ writings: [] })
  },
  
  getWritingsByExercise: (exerciseType) => {
    return get().writings.filter((w) => w.exerciseType === exerciseType)
  }
}))
