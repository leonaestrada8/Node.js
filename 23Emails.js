// 2.3 Emails
function categorizarEmail(email, regras) {
    if (regras.spam.includes(email.dominio)) {
      return "Spam";
    }
    if (regras.trabalho.includes(email.dominio)) {
      return "Trabalho";
    }
    return "Pessoal";
  }
  
  function classificarEmails(emails, regras) {
    const categorias = {
      Pessoal: [],
      Trabalho: [],
      Spam: []
    };
  
    emails.forEach(email => {
      const categoria = categorizarEmail(email, regras);
      categorias[categoria].push(email.endereco);
    });
  
    return categorias;
  }
  
  const emails = [
    { endereco: 'john@example.com', dominio: 'example.com' },
    { endereco: 'sara@work.com', dominio: 'work.com' },
    { endereco: 'spam@mail.net', dominio: 'mail.net' }
  ];
  
  const regras = {
    spam: ['mail.net'],
    trabalho: ['work.com']
  };
  
  const classificacao = classificarEmails(emails, regras);
  console.log(classificacao);
  