const fonts = {
  extraSmall: '1.2rem',
  small: '1.4rem',
  medium: '2.3rem',
  extraBig: '3.5rem',
};

const general = {
  boxShadow: '0px 1px 8px rgba(0, 0, 0, 0.07)',
};

const colors = {
  ligntGreen: 'rgb(240, 250, 240)',
  green: 'rgb(110, 180, 113)',
  lightGray: 'rgb(238, 238, 238)',
  gray: 'gray',
  darkGray: 'rgb(214, 214, 214)',
  orange: 'rgb(255, 130, 27)',
  white: '#fff',
  black: '#000',
  lightRed: 'rgb(253, 178, 178)',
  darkBlue: 'rgb(46, 79, 133)',
  cyan: 'rgb(164, 182, 207)',
  prune: 'rgb(0, 8, 113)',
};

const theme = {
  alert: {
    backgroundColor: colors.ligntGreen,
    borderColor: colors.lightGray,
    boxShadow: general.boxShadow,
    primaryText: {
      fontSize: fonts.medium,
      color: colors.green,
    },
  },
  button: {
    width: '165px',
    height: '50px',
    backgroundColor: colors.orange,
    color: colors.white,
    fontSize: fonts.small,
    borderRadius: '2px',
    disabled: {
      backgroundColor: colors.gray,
      opacity: '0.5',
    },
  },
  card: {
    boxShadow: general.boxShadow,
    borderColor: colors.lightGray,
  },
  container: {
    margin: '0 8%',
  },
  counter: {},
  error: {
    backgroundColor: colors.lightRed,
    fontSize: fonts.extraSmall,
    color: colors.white,
  },
  form: {
    control: {
      label: {
        width: '120px',
        maxHeight: '40px',
        requiredMarkColor: colors.lightRed,
      },
      error: {
        maxWidth: '160px',
        maxHeight: '40px',
      },
    },
    date: {},
    input: {},
    number: {},
    radio: {},
    select: {},
    textarea: {},
  },
  header: {
    height: '80px',
    fontSize: fonts.extraBig,
    backgroundColor: colors.darkBlue,
    color: colors.white,
  },
  hint: {
    color: colors.darkGray,
    fontSize: fonts.extraSmall,
  },
  icon: {},
  input: {
    height: '38px',
    borderColor: colors.lightGray,
    errorBorderColor: colors.lightRed,
    fontSize: fonts.small,
  },
  label: {
    primaryColor: colors.cyan,
    secondaryColor: colors.black,
    errorColor: colors.lightRed,
  },
  radio: {
    color: colors.cyan,
  },
  select: {},
  textarea: {
    borderColor: colors.lightGray,
    errorBorderColor: colors.lightRed,
    fontSize: fonts.small,
  },
  title: {
    fontSize: fonts.medium,
    borderColor: colors.lightGray,
    color: colors.prune,
  },
};

export default theme;
