import React from 'react';
import styled, {FlattenSimpleInterpolation} from 'styled-components';
import {
  Color,
  TextAlign,
  Typography,
  LineHeight,
  LetterSpacing,
  CustomMedia,
} from '../../styles/variables';

const Wrapper = styled.span<{
  block: boolean;
  color: string;
  align: TextAlign;
  lineHeight?: typeof LineHeight[keyof typeof LineHeight];
  letterSpacing?: typeof LetterSpacing[keyof typeof LetterSpacing];
  bold: boolean;
  typography: TypographyViewPort;
}>`
  display: ${({block}): string => (block ? 'block' : 'inline-block')};
  color: ${({color}): string => color};
  text-align: ${({align}): string => align};
  font-weight: ${({bold}): string => (bold ? 'bold' : 'normal')};
  ${({typography}): FlattenSimpleInterpolation =>
    typography.mobile as FlattenSimpleInterpolation}
  ${({lineHeight}): string | false =>
    lineHeight != null && `line-height: ${lineHeight};`}
  ${({letterSpacing}): string | false =>
    letterSpacing != null && `letter-spacing: ${letterSpacing};`}
  
  @media(${CustomMedia.Tablet}) {
    ${({typography}): FlattenSimpleInterpolation | undefined =>
      typography.tablet}
  }

  @media (${CustomMedia.Desktop}) {
    ${({typography}): FlattenSimpleInterpolation | undefined =>
      typography.desktop}
  }
`;

interface TypographyViewPort {
  mobile?: FlattenSimpleInterpolation;
  tablet?: FlattenSimpleInterpolation;
  desktop?: FlattenSimpleInterpolation;
}

export type Props = React.HTMLAttributes<HTMLElement> & {
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  block?: boolean;
  bold?: boolean;
  color?: string;
  align?: TextAlign;
  lineHeight?: typeof LineHeight[keyof typeof LineHeight];
  letterSpacing?: typeof LetterSpacing[keyof typeof LetterSpacing];
  typography?: TypographyViewPort;
  children?: React.ReactNode;
};

export const Text: React.VFC<Props> = ({
  block,
  color,
  align,
  bold,
  typography,
  children,
  ...rest
}) => (
  <Wrapper
    {...rest}
    block={block as boolean}
    color={color}
    align={align as TextAlign}
    bold={bold as boolean}
    typography={typography as TypographyViewPort}
  >
    {children}
  </Wrapper>
);

Text.defaultProps = {
  as: 'span',
  block: false,
  bold: false,
  color: Color.GRAY_ALPHA.GRAY_90,
  align: 'left',
  typography: {mobile: Typography.SF_NORMAL_16},
};
