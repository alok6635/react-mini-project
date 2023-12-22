function openTab(cityName){
    document.querySelectorAll('.tabcontent').forEach(tab => tab.style.display = 'none');
    document.querySelectorAll('.tab button').forEach(button => button.classList.remove('active'));
    document.getElementById(cityName).style.display = 'block';
    event.currentTarget.classList.add('active');
  }