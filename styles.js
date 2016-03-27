const IOS_NAV_BAR_HEIGHT = 44
const IOS_STATUS_BAR_HEIGHT = 20
const ANDROID_NAV_BAR_HEIGHT = 56
const ANDROID_STATUS_BAR_HEIGHT = 24

export default {
  navBarContainer: {},
  statusBarIOS: {
    height: IOS_STATUS_BAR_HEIGHT,
    backgroundColor: '#eee',
  },
  statusBarAndroid: {
    height: ANDROID_STATUS_BAR_HEIGHT,
    backgroundColor: '#eee',
  },
  navBar: {
    borderTopWidth: 0,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  navBarIOS: {
    backgroundColor: '#eee',
    height: IOS_NAV_BAR_HEIGHT,
    paddingLeft: 8,
    paddingRight: 8,
  },
  navBarAndroid: {
    backgroundColor: '#eee',
    height: ANDROID_NAV_BAR_HEIGHT,
    padding: 16,
  },
  navBarButtonIOS: {
    marginLeft: 0,
  },
  navBarButtonAndroid: {
    marginLeft: 16,
  },
  navBarButtonText: {
    fontSize: 17,
    letterSpacing: 0.5,
    color: '#607D8B',
  },
  navBarTitleText: {
    fontSize: 17,
    letterSpacing: 0.5,
    color: '#263238',
    fontWeight: '500',
    textAlign: 'center',
  },
  buttonGroup: {
    flexDirection: 'row',
  },
}
