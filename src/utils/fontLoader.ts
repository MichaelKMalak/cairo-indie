
/**
 * Font loader utility to ensure fonts are properly loaded
 * and applied, especially on mobile devices.
 */

export const ensureFontsLoaded = () => {
  // This function is called on app initialization
  // to ensure fonts are properly loaded
  
  const isMobile = window.innerWidth < 768;
  
  if (isMobile) {
    console.log('Mobile device detected, applying additional font fixes');
    
    // Add a class to indicate we're on mobile
    document.documentElement.classList.add('is-mobile-device');
    
    // Force font application after a short delay
    setTimeout(() => {
      const elements = {
        montserrat: document.querySelectorAll('.font-montserrat'),
        gunterz: document.querySelectorAll('.font-gunterz'),
        paragraphs: document.querySelectorAll('p'),
        headings: document.querySelectorAll('h1, h2, h3, h4, h5, h6')
      };
      
      // Apply direct styles to ensure font application
      elements.montserrat.forEach(el => {
        (el as HTMLElement).style.fontFamily = "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif";
      });
      
      elements.gunterz.forEach(el => {
        (el as HTMLElement).style.fontFamily = "'Gunterz', Georgia, 'Times New Roman', Times, serif";
      });
      
      elements.paragraphs.forEach(el => {
        (el as HTMLElement).style.fontFamily = "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif";
      });
      
      elements.headings.forEach(el => {
        (el as HTMLElement).style.fontFamily = "'Gunterz', Georgia, 'Times New Roman', Times, serif";
      });
      
      console.log('Font fixes applied to mobile elements');
    }, 1000);
  }
  
  // Check if fonts are loaded
  document.fonts.ready.then(() => {
    const montserratLoaded = document.fonts.check('1em Montserrat');
    const guntertzLoaded = document.fonts.check('1em Gunterz');
    
    console.log(`Montserrat loaded: ${montserratLoaded}`);
    console.log(`Gunterz loaded: ${guntertzLoaded}`);
    
    if (!montserratLoaded) {
      console.warn('Montserrat failed to load, applying fallbacks');
      document.documentElement.classList.add('montserrat-failed');
    }
    
    if (!guntertzLoaded) {
      console.warn('Gunterz failed to load, applying fallbacks');
      document.documentElement.classList.add('gunterz-failed');
    }
  });
};

// For advanced debugging of font issues
export const debugFontLoading = () => {
  const fontFamilies = ['Montserrat', 'Gunterz'];
  
  fontFamilies.forEach(family => {
    const isLoaded = document.fonts.check(`1em ${family}`);
    console.log(`Font '${family}' loaded: ${isLoaded}`);
    
    if (!isLoaded) {
      console.warn(`Font '${family}' failed to load. Check network, font name, or add fallbacks.`);
    }
  });
  
  // Check all available document fonts
  document.fonts.ready.then(() => {
    console.log('All fonts loaded. Available fonts:');
    document.fonts.forEach(font => {
      console.log(`- ${font.family} (${font.style} ${font.weight})`);
    });
  });
};
