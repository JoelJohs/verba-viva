import { NextRequest, NextResponse } from 'next/server'
import { hash } from 'bcryptjs'
import { PrismaClient } from '@/generated/prisma'

const prisma = new PrismaClient()

export async function POST(request: NextRequest) {
    try {
        const { username, password } = await request.json()

        if (!username || !password) {
            return NextResponse.json(
                { error: 'Usuario y contraseña son requeridos' },
                { status: 400 }
            )
        }

        if (password.length < 4) {
            return NextResponse.json(
                { error: 'La contraseña debe tener al menos 4 caracteres' },
                { status: 400 }
            )
        }

        // Verificar si el usuario ya existe
        const existingUser = await prisma.user.findUnique({
            where: { username }
        })

        if (existingUser) {
            return NextResponse.json(
                { error: 'El usuario ya existe' },
                { status: 400 }
            )
        }

        // Crear usuario con contraseña hasheada
        const hashedPassword = await hash(password, 10)
        const user = await prisma.user.create({
            data: {
                username,
                password: hashedPassword
            }
        })

        return NextResponse.json(
            { message: 'Usuario creado exitosamente', userId: user.id },
            { status: 201 }
        )
    } catch (error) {
        console.error('Error al registrar usuario:', error)
        return NextResponse.json(
            { error: 'Error al crear usuario' },
            { status: 500 }
        )
    }
}
