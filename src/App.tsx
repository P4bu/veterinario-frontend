import { Container, Typography, Button } from '@mui/material'

function App() {
  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h3" gutterBottom>
        Veterinaria App
      </Typography>
      <Typography variant="body1" gutterBottom>
        Gestiona tus pacientes y veterinarios desde aquí.
      </Typography>
      <Button variant="contained" color="primary">
        Iniciar sesión
      </Button>
    </Container>
  )
}

export default App