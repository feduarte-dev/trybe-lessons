const submitBtn = document.querySelector('#submit-btn');

function clearFields() {
  submitBtn.disabled = true;
}

function enableSubmit() {
  const agreement = document.querySelector('#agreement');
  submitBtn.disabled = !agreement.checked;
}

// No exercício bônus, você continuará usando o fomulário do TrybeTravel, mas que tal adicionar outras bibliotecas para deixar a página ainda mais legal.

// Para o JavaScript, existem diferentes bibliotecas de validação para os campos de um formulário. Utilize a sugestão abaixo para substituir as validações que você fez manualmente:

const validate = new JustValidate('#main-form', {
  errorFieldCssClass: 'is-invalid',
  errorFieldStyle: {
    border: '1px solid red',
  },
  errorLabelCssClass: 'is-label-invalid',
  errorLabelStyle: {
    color: 'red',
    textDecoration: 'underlined',
  },
  focusInvalidField: true,
  lockForm: true,
  tooltip: {
    position: 'top',
  },
});

validate
  .addField('#fullName', [
    {
      rule: 'required',
      errorMessage: 'O campo de nome é obrigatório.',
    },
    {
      rule: 'maxLength',
      value: 40,
      errorMessage: 'O limite é de 40 caracteres.',
    },
    {
      rule: 'minLength',
      value: 10,
      errorMessage: 'O mínimo é de 10 caracteres.',
    },
  ])
  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'O campo de email é obrigatório.',
    },
    {
      rule: 'email',
      errorMessage: 'O email digitado não é válido.',
    },
    {
      rule: 'maxLength',
      value: 50,
      errorMessage: 'O limite é de 50 caracteres.',
    },
  ])
  .addField('#question', [
    {
      rule: 'required',
      errorMessage: 'O campo de resposta é obrigatório.',
    },
    {
      rule: 'maxLength',
      value: 500,
      errorMessage: 'O limite é de 500 caracteres',
    },
  ])
  .addField('#date', [
    {
      rule: 'required',
      errorMessage: 'O campo de data é obrigatório.',
    },
  ]);

window.onload = function () {
  const clearBtn = document.querySelector('#clear-btn');
  clearBtn.addEventListener('click', clearFields);
  const agreement = document.querySelector('#agreement');
  agreement.addEventListener('change', enableSubmit);
};
