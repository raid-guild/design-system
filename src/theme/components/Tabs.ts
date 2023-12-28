const Tabs = {
  baseStyle: {
    tab: {
      alignItems: 'flex-start',
    },
  },
  variants: {
    default: {
      tab: {
        fontFamily: 'texturina',
        _selected: {
          color: 'primary.500',
          borderBottomColor: 'primary.500',
          borderBottomWidth: '2px',
        },
      },
    },
    unstyled: {
      tab: {
        _selected: {
          color: 'blue.500',
          borderBottomColor: 'blue.500',
          borderBottomWidth: '2px',
        },
      },
    },
  },
};
export default Tabs;
