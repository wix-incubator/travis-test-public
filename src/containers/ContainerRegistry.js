import {AppRegistry} from 'react-native';
import ContainerWrapper from './ContainerWrapper';

export default class ContainerRegistry {
  constructor(store) {
    this.store = store;
  }

  registerContainer(containerName, getContainerFunc) {
    const OriginalContainer = getContainerFunc();
    const NavigationContainer = ContainerWrapper.wrap(containerName, OriginalContainer, this.store);
    this.store.setContainerClass(containerName, NavigationContainer);
    AppRegistry.registerComponent(containerName, () => NavigationContainer);
  }
}
