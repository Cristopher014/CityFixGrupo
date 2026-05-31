// src/utils/reportEngine.js

// CONFIGURACIÓN CORRECTA: URL y Clave sincronizadas del mismo proyecto
const SUPABASE_URL = "https://vwqrrxghiveeelltahno.supabase.co"; 
const SUPABASE_ANON_KEY = "sb_publishable_hj18MDls3Ve85R4veE5vyg_wxnZfBJw";

/**
 * Obtiene todos los reportes directamente desde la tabla de Supabase
 * @returns {Promise<Array>} Lista de reportes de infraestructura
 */
async function getReports() {
  // Apuntar directamente al endpoint /reports pasando el parámetro requerido por las llaves cortas
  const url = `${SUPABASE_URL}/rest/v1/reports?apikey=${SUPABASE_ANON_KEY}`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "apikey": SUPABASE_ANON_KEY,
        "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
        "Content-Type": "application/json"
      }
    });

    // Control de errores analizando el estado response.ok
    if (!response.ok) {
      throw new Error(`Error en la petición: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error en el Motor de Conexión (reportEngine):", error.message);
    throw error;
  }
}

module.exports = { getReports };