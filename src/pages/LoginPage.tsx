import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
    // servicio login
  };

  return (
    <Box sx={{ height: '98vh', display: 'flex' }}>

      {/* imagen */}
      <Box
        sx={{
          flex: 1,
          display: { xs: 'none', sm: 'block' },
          backgroundImage: 'url(/images/loginImage.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* formulario */}
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
            Iniciar sesión
          </Typography>
          <Box component="form" noValidate onSubmit={handleLogin}>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Correo electrónico"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Contraseña"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Ingresar
            </Button>
            <Typography variant='body2' align='center' sx={{ mt: 2 }}>
              ¿Eres Veterinario y no tienes cuenta? {" "}
              <Link to="/registroVeterinario">Registrate aquí</Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
