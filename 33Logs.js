// 3.3 - Logs 
const logs = [
    'INFO: Usuário logado com sucesso.',
    'CRITICAL: Falha na base de dados.',
    'INFO: Arquivo atualizado.',
    'WARNING: Tentativa de acesso não autorizado.',
    'CRITICAL: Sistema de arquivos corrompido.'
  ];
  
  class LogAnalyzer {
    constructor(logs) {
      this.logs = logs;
    }
  
    filterCriticalEvents() {
      return this.logs.filter(log => log.startsWith('CRITICAL'));
    }
  
    generateReport() {
      const criticalEvents = this.filterCriticalEvents();
  
      if (criticalEvents.length === 0) {
        console.log('Nenhum evento crítico encontrado.');
        return;
      }
  
      console.log('Relatório de Eventos Críticos:');
      for (const event of criticalEvents) {
        console.log(event);
      }
    }
  }
  
  const analyzer = new LogAnalyzer(logs);
  analyzer.generateReport();
  