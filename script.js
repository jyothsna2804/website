// Smooth scroll to features section
function scrollToFeatures() {
    document.getElementById('features').scrollIntoView({
        behavior: 'smooth'
    });
}

// Enhanced button hover effects with sound simulation
function enhanceButtonEffects() {
    const buttons = document.querySelectorAll('.cta-button');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'translateY(-2px) scale(1.05)';
            // Simulate subtle synth ping sound effect
            createRippleEffect(button);
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translateY(0) scale(1)';
        });
        
        button.addEventListener('click', (e) => {
            button.style.transform = 'translateY(0) scale(0.95)';
            createClickBurst(e.target);
            setTimeout(() => {
                button.style.transform = 'translateY(-2px) scale(1.05)';
            }, 150);
        });
    });
}

// Create ripple effect on button hover
function createRippleEffect(button) {
    const ripple = document.createElement('div');
    ripple.style.position = 'absolute';
    ripple.style.borderRadius = '50%';
    ripple.style.background = 'rgba(255, 255, 255, 0.3)';
    ripple.style.transform = 'scale(0)';
    ripple.style.animation = 'ripple 0.6s linear';
    ripple.style.left = '50%';
    ripple.style.top = '50%';
    ripple.style.width = '20px';
    ripple.style.height = '20px';
    ripple.style.marginLeft = '-10px';
    ripple.style.marginTop = '-10px';
    ripple.style.pointerEvents = 'none';
    
    button.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Create click burst effect
function createClickBurst(element) {
    const burst = document.createElement('div');
    burst.className = 'click-burst';
    burst.style.position = 'absolute';
    burst.style.left = '50%';
    burst.style.top = '50%';
    burst.style.width = '100px';
    burst.style.height = '100px';
    burst.style.marginLeft = '-50px';
    burst.style.marginTop = '-50px';
    burst.style.background = 'radial-gradient(circle, rgba(255, 107, 53, 0.8) 0%, transparent 70%)';
    burst.style.borderRadius = '50%';
    burst.style.transform = 'scale(0)';
    burst.style.animation = 'clickBurst 0.4s ease-out';
    burst.style.pointerEvents = 'none';
    
    element.appendChild(burst);
    
    setTimeout(() => {
        burst.remove();
    }, 400);
}

// Animate elements on scroll with enhanced effects
function animateOnScroll() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Add glow effect for special elements
                if (entry.target.classList.contains('reason-card') || 
                    entry.target.classList.contains('feature-category')) {
                    setTimeout(() => {
                        entry.target.style.boxShadow = '0 15px 40px rgba(0, 255, 171, 0.1)';
                    }, 300);
                }
            }
        });
    }, observerOptions);
    
    // Observe elements to animate
    const elementsToAnimate = document.querySelectorAll(
        '.reason-card, .feature-category, .step, .bonus-card, .learning-card'
    );
    
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease, box-shadow 0.3s ease';
        observer.observe(el);
    });
}

// Voice state simulation for interactive elements
function simulateVoiceStates() {
    const voiceElements = document.querySelectorAll('.voice-waveform .wave-bar');
    let currentState = 'calm'; // calm, thinking, excited
    
    setInterval(() => {
        const states = ['calm', 'thinking', 'excited'];
        currentState = states[Math.floor(Math.random() * states.length)];
        
        voiceElements.forEach((bar, index) => {
            switch(currentState) {
                case 'calm':
                    bar.style.animationDuration = '2s';
                    bar.style.background = 'linear-gradient(to top, #00FFAB, #00FFAB)';
                    break;
                case 'thinking':
                    bar.style.animationDuration = '3s';
                    bar.style.background = 'linear-gradient(to top, #1F51FF, #1F51FF)';
                    break;
                case 'excited':
                    bar.style.animationDuration = '0.8s';
                    bar.style.background = 'linear-gradient(to top, #FF6B35, #FF6B35)';
                    break;
            }
        });
    }, 5000);
}

// Particle system enhancement
function enhanceParticleSystem() {
    const particleContainers = document.querySelectorAll('.glow-particles, .final-particles');
    
    particleContainers.forEach(container => {
        // Add random movement to particles
        const particles = container.querySelectorAll('.particle');
        particles.forEach(particle => {
            const randomDelay = Math.random() * 3;
            const randomDuration = 3 + Math.random() * 2;
            particle.style.animationDelay = `${randomDelay}s`;
            particle.style.animationDuration = `${randomDuration}s`;
        });
    });
}

// Glass morphism effect enhancement
function enhanceGlassMorphism() {
    const glassElements = document.querySelectorAll('.glass-panel');
    
    glassElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            element.style.background = 'rgba(42, 42, 42, 0.4)';
            element.style.borderColor = 'rgba(0, 255, 171, 0.3)';
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.background = 'rgba(42, 42, 42, 0.3)';
            element.style.borderColor = 'rgba(242, 242, 242, 0.1)';
        });
    });
}

// Mesh lights animation enhancement
function enhanceMeshLights() {
    const meshLights = document.querySelectorAll('.mesh-light');
    
    meshLights.forEach((light, index) => {
        const randomDelay = Math.random() * 4;
        const randomDuration = 8 + Math.random() * 4;
        light.style.animationDelay = `${randomDelay}s`;
        light.style.animationDuration = `${randomDuration}s`;
    });
}

// Add CSS animations dynamically
function addDynamicAnimations() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        @keyframes clickBurst {
            to {
                transform: scale(2);
                opacity: 0;
            }
        }
        
        .glass-panel {
            transition: all 0.3s ease;
        }
        
        .voice-waveform .wave-bar {
            transition: all 0.5s ease;
        }
    `;
    document.head.appendChild(style);
}

// Initialize all enhancements when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    enhanceButtonEffects();
    animateOnScroll();
    simulateVoiceStates();
    enhanceParticleSystem();
    enhanceGlassMorphism();
    enhanceMeshLights();
    addDynamicAnimations();
});

// Smooth scrolling for all internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Apply throttling to scroll-based functions
window.addEventListener('scroll', throttle(() => {
    // Parallax effect for mesh lights
    const scrolled = window.pageYOffset;
    const meshLights = document.querySelectorAll('.mesh-light');
    
    meshLights.forEach((light, index) => {
        const rate = scrolled * (0.1 + index * 0.05);
        light.style.transform = `translate(${rate}px, ${rate * 0.5}px)`;
    });
}, 100));

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Trigger hero animations
    const heroElements = document.querySelectorAll('.hero-text > *');
    heroElements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 300);
    });
    
    // Start particle animations
    const particles = document.querySelectorAll('.particle');
    particles.forEach((particle, index) => {
        setTimeout(() => {
            particle.style.opacity = '1';
        }, index * 200);
    });
});