document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('newsletter-form');
  var success = document.getElementById('newsletter-success');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var data = new FormData(form);
    fetch(form.action, { method: 'POST', mode: 'no-cors', body: data }).catch(function () {});
    form.style.display = 'none';
    success.classList.add('visible');
  });
});
