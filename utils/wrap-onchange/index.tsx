const wrapOnchange = (fn: (val: any) => void) => (e: any) => {
    e.preventDefault();
    fn(e.target.value);
};

export default wrapOnchange;