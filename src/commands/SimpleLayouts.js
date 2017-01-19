export const singleScreenApp = {
  container: {
    name: 'com.example.MyScreen'
  }
};

export const passedFunction = () => 'Hello from a function';

export const singleScreenWithAditionalParams = {
  container: {
    name: 'com.example.MyScreen',
    passProps: {
      foo: {
        number: 1,
        string: 'Hello!'
      },
      bar: passedFunction
    },
    style: {},
    buttons: {}
  }
};

export const tabBasedApp = {
  tabs: [
    {
      container: {
        name: 'com.example.ATab'
      }
    },
    {
      container: {
        name: 'com.example.SecondTab'
      }
    },
    {
      container: {
        name: 'com.example.ATab'
      }
    }
  ]
};

export const singleWithSideMenu = {
  container: {
    name: 'com.example.MyScreen'
  },
  sideMenu: {
    left: {
      container: {
        name: 'com.example.MyScreen'
      }
    }
  }
};

export const singleWithRightSideMenu = {
  container: {
    name: 'com.example.MyScreen'
  },
  sideMenu: {
    right: {
      name: 'com.example.Menu'
    }
  }
};

export const singleWithBothMenus = {
  container: {
    name: 'com.example.MyScreen'
  },
  sideMenu: {
    left: {
      name: 'com.example.Menu1'
    },
    right: {
      name: 'com.example.Menu2'
    }
  }
};

export const tabBasedWithBothSideMenus = {
  tabs: [
    {
      container: {
        name: 'com.example.FirstTab'
      }
    },
    {
      container: {
        name: 'com.example.SecondTab'
      }
    },
    {
      container: {
        name: 'com.example.FirstTab'
      }
    }
  ],
  sideMenu: {
    left: {
      name: 'com.example.Menu1'
    },
    right: {
      name: 'com.example.Menu2'
    }
  }
};
