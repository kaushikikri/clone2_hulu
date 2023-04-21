let lives = document.querySelector('.live-sport');
let news = document.querySelector('.news');
let events = document.querySelector('.events');
let section = document.querySelector('.ads-section');

lives.addEventListener('click',()=>{
      section.classList.add('ads-section-1');
      section.classList.remove('ads-section-2');
      section.classList.remove('ads-section-3');
      document.querySelector('.sec-1').classList.remove('blind');
      document.querySelector('.sec-2').classList.add('blind');
      document.querySelector('.sec-3').classList.add('blind');
      lives.classList.add('active');
      lives.classList.remove('inactive');
      news.classList.remove('active');
      events.classList.remove('active');
      news.classList.add('inactive');
      events.classList.add('inactive');
      // document.querySelector('.ads-section-2').classList.add('blind');
      
})
news.addEventListener('click',()=>{
      section.classList.remove('ads-section-1');
      section.classList.add('ads-section-2');
      section.classList.remove('ads-section-3');
      document.querySelector('.sec-1').classList.add('blind');
      document.querySelector('.sec-2').classList.remove('blind');
      document.querySelector('.sec-3').classList.add('blind');
      lives.classList.remove('active');
      lives.classList.add('inactive');
      news.classList.add('active');
      events.classList.remove('active');
      news.classList.remove('inactive');
      events.classList.add('inactive');
      // document.querySelector('.ads-section-2').classList.add('blind');
      
})

events.addEventListener('click',()=>{
      section.classList.remove('ads-section-1');
      section.classList.remove('ads-section-2');
      section.classList.add('ads-section-3');
      document.querySelector('.sec-1').classList.add('blind');
      document.querySelector('.sec-2').classList.add('blind');
      document.querySelector('.sec-3').classList.remove('blind');
      lives.classList.remove('active');
      lives.classList.add('inactive');
      news.classList.remove('active');
      events.classList.add('active');
      news.classList.add('inactive');
      events.classList.remove('inactive');
      // document.querySelector('.ads-section-2').classList.add('blind');
      
})

