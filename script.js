//Animazione Numeri - Sezione 1
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll('.hero-stat-number');
  
  counters.forEach(counter => {
    const numberEl = counter.querySelector('.number');
    const target = parseInt(counter.getAttribute('data-target'));
    
    if (!numberEl || isNaN(target)) return;
    
    let count = 0;
    const speed = 30;
    const step = Math.ceil(target / 50);
    
    const updateCount = () => {
      if (count < target) {
        count += step;
        if (count > target) count = target;
        
        numberEl.textContent = count;
        
        setTimeout(updateCount, speed);
      }
    };
    
    updateCount();
  });
});

//Bottone Form Disabilitato - Sezione 1
document.addEventListener("DOMContentLoaded", function () {
  function setupFormValidation(formId) {
    const form = document.getElementById(formId);
    if (!form) return;

    const inputs = form.querySelectorAll('input[required]');
    const submitBtn = form.querySelector("button[type='submit']");

    function validateForm() {
      // Controlla solo che i campi non siano vuoti (non validazione email qui)
      let allFilled = true;
      inputs.forEach(input => {
        if (!input.value.trim()) allFilled = false;
      });

      submitBtn.disabled = !allFilled;
      submitBtn.classList.toggle("btn-disabled", !allFilled);
    }

    inputs.forEach(input => {
      input.addEventListener("input", validateForm);
    });

    validateForm();
  }

  setupFormValidation('myForm1');
  setupFormValidation('myForm2');
  setupFormValidation('myForm3');
});


//Animazione Entrata dal Basso - Sezione 2
document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.fade-in');
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  });
  
  elements.forEach(el => observer.observe(el));
});


//Animazione card dopo "chi siamo" - Sezione 2
document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.slide-up');
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  });
  
  elements.forEach(el => observer.observe(el));
});

//Animazioni Cards - Sezione 3
document.querySelectorAll('.custom-card-hover').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.querySelector('h5').classList.add('text-gradient');
  });
  card.addEventListener('mouseleave', () => {
    card.querySelector('h5').classList.remove('text-gradient');
  });
});

//Animazione statistiche - Sezione 4
document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.counter');
  const options = { threshold: 0.6 };
  let hasAnimated = false;
  
  const animateCounter = (el, target, suffix = '') => {
    let start = 0;
    const duration = 1500;
    const increment = target / (duration / 16);
    
    const step = () => {
      start += increment;
      if (start < target) {
        el.textContent = Math.floor(start) + suffix;
        requestAnimationFrame(step);
      } else {
        el.textContent = target + suffix;
      }
    };
    requestAnimationFrame(step);
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        
        counters.forEach(counter => {
          const target = parseInt(counter.getAttribute('data-target'));
          let suffix = '';
          
          if (counter.textContent.includes('%')) suffix = '%';
          else if (counter.textContent.toLowerCase().includes('h')) suffix = 'h';
          
          animateCounter(counter, target, suffix);
        });
      }
    });
  }, options);
  
  counters.forEach(counter => {
    observer.observe(counter);
  });
});

//Animazione card e form - Sezione 5
 document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          el.classList.remove("invisible");

          if (el.classList.contains("animate-from-left")) {
            el.classList.add("slide-in-left");
          } else if (el.classList.contains("animate-from-right")) {
            el.classList.add("slide-in-right");
          }

          observer.unobserve(el);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll(".invisible").forEach(el => {
      observer.observe(el);
    });
  });