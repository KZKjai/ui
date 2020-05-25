import { BareProps } from './types';
import React from 'react';
interface Props extends BareProps {
    dataFor?: string;
    effect?: 'solid' | 'float';
    offset?: {
        bottom?: number;
        left?: number;
        right?: number;
        top?: number;
    };
    place?: 'bottom' | 'top' | 'right' | 'left';
    text: React.ReactNode;
    trigger: string;
}
declare function Tooltip({ className, effect, offset, place, text, trigger }: Props): React.ReactElement<Props> | null;
declare const _default: import("styled-components").StyledComponent<typeof Tooltip, any, {}, never>;
export default _default;
