const disableDevTools = () => {
    if (process.env.NEXT_PUBLIC_NODE_ENV !== 'development') {
      const blockDevTools = (e: KeyboardEvent) => {
        if (
          e.key === 'F12' || 
          (e.ctrlKey && e.shiftKey && e.key === 'I') || 
          (e.metaKey && e.altKey && e.key === 'I')
        ) {
          e.preventDefault();
        }
      };
  
      window.addEventListener('keydown', blockDevTools);
      window.addEventListener('contextmenu', (e) => e.preventDefault());
  
      // Optionally, you can also block other dev tools opening mechanisms
      const clearConsole = () => {
        if (process.env.NEXT_PUBLIC_NODE_ENV !== 'development') {
          console.clear();
          setTimeout(clearConsole, 100);
        }
      };
      clearConsole();
    }
  };
  
  export default disableDevTools;
  