import React, { useState } from "react";
import type { MascotaDTO } from "../types/MascotaDTO";
import {
  Box,
  Typography,
  Paper,
  TextField,
  Grid,
  Button,
  MenuItem,
} from "@mui/material";

const MascotaForm = () => {
  const [formData, setFormData] = useState<MascotaDTO>({
    nombre: "",
    especie: "",
    raza: "",
    edad: 0,
    sexo: "",
    pacienteId: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "edad" || name === "pacienteId" ? parseInt(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("DATOS DE LA MASCOTA ", formData);
    // api para guardar mascota
  };

  return (
    <>
      <Box
        component={Paper}
        elevation={6}
        sx={{
          maxWidth: 600,
          mx: "auto",
          mt: 4,
          p: 4,
        }}
      >
        <Typography variant="h5" textAlign="center" gutterBottom>
          Registrar Mascota
        </Typography>

        <Box component="form" onSubmit={handleSubmit} noValidate>
          <Grid container spacing={2}>
            <TextField
              label="Nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              fullWidth
              required
            />

            <TextField
              label="Especie"
              name="especie"
              value={formData.especie}
              onChange={handleChange}
              fullWidth
              required
            />

            <TextField
              label="Raza"
              name="raza"
              value={formData.raza}
              onChange={handleChange}
              fullWidth
            />

            <TextField
              label="Edad"
              name="edad"
              type="number"
              value={formData.edad}
              onChange={handleChange}
              fullWidth
            />

            <TextField
              label="Sexo"
              name="sexo"
              select
              value={formData.sexo}
              onChange={handleChange}
              fullWidth
            >
              <MenuItem value="Macho">Macho</MenuItem>
              <MenuItem value="Hembra">Hembra</MenuItem>
            </TextField>

            <TextField
              label="ID del Paciente (Dueño)"
              name="pacienteId"
              type="number"
              value={formData.pacienteId}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>

          <Button type="submit" variant="contained" fullWidth sx={{ mt: 3 }}>
            Registrar Mascota
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default MascotaForm;
