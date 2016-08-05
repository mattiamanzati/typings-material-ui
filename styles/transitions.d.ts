interface Transitions {
    easeOut(duration?: string, property?: string | string[], delay?: string, easeFunction?: string): string;
    create(duration?: string, property?: string, delay?: string, easeFunction?: string): string;
    easeOutFunction: string;
    easeInOutFunction: string;
}
export default Transitions;