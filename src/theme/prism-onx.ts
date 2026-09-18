import type { PrismTheme } from 'prism-react-renderer';

const BACKGROUND = '#0a0e11';

const onxDark: PrismTheme = {
  plain: {
    color: '#e6e9ef',
    backgroundColor: BACKGROUND,
  },
  styles: [
    {
      types: ['comment', 'prolog', 'cdata'],
      style: { color: '#72808f', fontStyle: 'italic' },
    },
    {
      types: ['punctuation', 'operator', 'entity'],
      style: { color: '#8b949e' },
    },
    {
      types: ['keyword', 'atrule', 'rule', 'important', 'selector'],
      style: { color: '#30a9ff' },
    },
    {
      types: ['string', 'char', 'attr-value', 'regex'],
      style: { color: '#6fd3b8' },
    },
    {
      types: ['number', 'boolean', 'constant', 'symbol'],
      style: { color: '#c4a7ff' },
    },
    {
      types: ['function', 'method', 'attr-name', 'property', 'tag'],
      style: { color: '#83c9ff' },
    },
    {
      types: ['class-name', 'builtin', 'maybe-class-name'],
      style: { color: '#f0b86c' },
    },
    {
      types: ['variable', 'parameter'],
      style: { color: '#e6e9ef' },
    },
    {
      types: ['deleted'],
      style: { color: '#ff7b81' },
    },
    {
      types: ['inserted'],
      style: { color: '#5ad48f' },
    },
    {
      types: ['namespace'],
      style: { opacity: 0.75 },
    },
    {
      types: ['bold'],
      style: { fontWeight: 'bold' },
    },
    {
      types: ['italic'],
      style: { fontStyle: 'italic' },
    },
  ],
};

export default onxDark;
