function toggleCard() {
    const initialCard = document.querySelector('.initial-card');
    const finalCard = document.querySelector('.final-card');
  
    if (initialCard.style.display === 'none') {
      initialCard.style.display = 'block';
      finalCard.style.display = 'none';
    } else {
      initialCard.style.display = 'none';
      finalCard.style.display = 'block';
    }
  }