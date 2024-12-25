const wrapClick = (fn: () => void) => (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    fn();
};

export default wrapClick;