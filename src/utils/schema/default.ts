import { IValidationRule } from 'src/types';

export const defaultSchema: IValidationRule[] = [
  {
    name: 'title',
    required: true,
  },
  {
    name: 'description',
    required: true,
  },
  {
    name: 'date',
    required: true,
  },
  {
    name: 'time',
    required: true,
  },
  {
    name: 'coordinator',
    required: true,
  },
  {
    name: 'fee',
    required: true,
  },
  {
    name: 'email',
    email: true,
  },
];
