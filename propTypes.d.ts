export type horizontal = 'left' | 'middle' | 'right';
export type vertical = 'top' | 'center' | 'bottom';
export type direction = 'left' | 'right' | 'up' | 'down';

export interface origin {
    horizontal: horizontal;
    vertical: vertical;
}

export type corners = 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';
export type cornersAndCenter = 'bottom-center' | 'bottom-left' | 'bottom-right' | 'top-center' | 'top-left' | 'top-right';