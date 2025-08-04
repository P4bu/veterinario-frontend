import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Paper, TextField, Grid, Button } from '@mui/material';  

interface VeterinarioDTO {
    nombre: string,
    apellidoPaterno: string,
    apellidoMaterno: string,
    rut: string,
    email: string,
    telefono: string,
    especialidad: string,
    password: string
}

const VeterinarioForm = () => {
    const [formData, setFormData] = useState<VeterinarioDTO> ({
        nombre: '',
        apellidoPaterno: '',
        apellidoMaterno: '',
        rut: '',
        email: '',
        telefono: '',
        especialidad: '',
        password: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('DATOS VETERINARIO: ', formData)
        // api para registrar veterinario
    }

    return (

        <>
            <Box sx={{ height: '98vh', display: 'flex' }}>

                <Box
                    component={Paper}
                    elevation={6}
                    square 
                    sx={{
                    flex: 1,
                    display: { xs: 'none', sm: 'block' },
                    backgroundImage: 'url(/images/loginImage.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    }}
                />

                <Box
                    component={Paper}
                    elevation={6}
                    square
                    sx={{
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    px: 4,
                    }}
                >
                    <Box sx={{ width: '100%', maxWidth: 400 }}>
                        <Typography component="h1" variant="h5" textAlign="center" mb={2}>
                            Registro de Veterinario
                        </Typography>
                            <Box component="form" onSubmit={handleSubmit} noValidate>
                                <Grid container spacing={1}>
                                    <TextField
                                        autoFocus
                                        label="Nombre"
                                        name="nombre"
                                        value={formData.nombre}
                                        onChange={handleChange}
                                        fullWidth
                                        margin='dense'
                                        size='small'
                                        required
                                    />
                                    <TextField
                                        label="Apellido Paterno"
                                        name="apellidoPaterno"
                                        value={formData.apellidoPaterno}
                                        onChange={handleChange}
                                        fullWidth
                                        margin='dense'
                                        size='small'
                                        required
                                        />
                                    <TextField
                                        label="Apellido Materno"
                                        name="apellidoMaterno"
                                        value={formData.apellidoMaterno}
                                        onChange={handleChange}
                                        fullWidth
                                        margin='dense'
                                        size='small'
                                        required
                                        />        
                                    <TextField
                                        label="RUT"
                                        name="rut"
                                        value={formData.rut}
                                        onChange={handleChange}
                                        fullWidth
                                        margin='dense'
                                        size='small'
                                        required
                                        />
                                    <TextField
                                        label="Email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        fullWidth
                                        margin='dense'
                                        size='small'
                                        required
                                        />
                                    <TextField
                                        label="Telefono"
                                        name="telefono"
                                        value={formData.telefono}
                                        onChange={handleChange}
                                        fullWidth
                                        margin='dense'
                                        size='small'
                                        required
                                        />
                                    <TextField
                                        label="Especialidad"
                                        name="especialidad"
                                        value={formData.especialidad}
                                        onChange={handleChange}
                                        fullWidth
                                        margin='dense'
                                        size='small'
                                        required
                                        />
                                    <TextField
                                        label="Contraseña"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        fullWidth
                                        margin='dense'
                                        size='small'
                                        required
                                        />
                                </Grid>
                                <Button
                                    type='submit'
                                    variant='contained'
                                    fullWidth
                                    sx={{ mt: 3 }}
                                >
                                    Registrar
                                </Button>
                                <Typography variant='body2' align='center' sx={{ mt: 2 }}>
                                    ¿Ya tienes una cuenta? {" "}
                                    <Link to="/login">Ingresa aquí</Link>
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </>
        )
    };

export default VeterinarioForm;