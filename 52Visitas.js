// Exemplo de dados (em um cenário real, você extrairia esses dados de suas fontes)
const dadosVisitas = [
    { visitor_id: 'v1', page: '/home', duration: 5 },
    { visitor_id: 'v1', page: '/contact', duration: 2 },
    { visitor_id: 'v2', page: '/home', duration: 3 },
    { visitor_id: 'v3', page: '/products', duration: 8 },
    { visitor_id: 'v3', page: '/home', duration: 2 },
  ];
  
  // Análise de visitantes únicos
  const visitantesUnicos = new Set(dadosVisitas.map(visita => visita.visitor_id));
  console.log(`Visitantes únicos: ${visitantesUnicos.size}`);
  
  // Análise de páginas mais visitadas
  const paginasVisitas = {};
  for (const visita of dadosVisitas) {
    const page = visita.page;
    paginasVisitas[page] = (paginasVisitas[page] || 0) + 1;
  }
  const paginaMaisVisitada = Object.keys(paginasVisitas).reduce((a, b) => paginasVisitas[a] > paginasVisitas[b] ? a : b);
  console.log(`Página mais visitada: ${paginaMaisVisitada} (${paginasVisitas[paginaMaisVisitada]} visitas)`);
  
  // Análise da duração média da visita
  const duracaoTotal = dadosVisitas.reduce((acc, visita) => acc + visita.duration, 0);
  const duracaoMedia = duracaoTotal / dadosVisitas.length;
  console.log(`Duração média da visita: ${duracaoMedia.toFixed(2)} minutos`);
  