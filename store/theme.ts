import { atom } from "jotai";
import { atomWithStorage} from 'jotai/utils'

const isRTLAtom = atom(false)
const darkModeAtom = atomWithStorage('darkMode',false)
const semiDarkModeAtom = atomWithStorage('semiDarkMode' ,false)
const skinAtom = atomWithStorage('skin' ,"default")
const contentWidthAtom = atom("full")
const menuTypeAtom = atom("vertical")
const navBarTypeAtom = atom("sticky")
const footerTypeAtom = atom("static")
const isMonochromeAtom = atomWithStorage('monochrome', false)
const menuCollapsedAtom = atom(false)
const menuHiddenAtom = atom(false)
const mobileMenuAtom = atom(false)
const customizerAtom = atom(false)
const widthAtom = atom(1920)
const breakPointsAtom = atom({
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
})
const themeControllerAtom = atom(false);

export { isRTLAtom, darkModeAtom, semiDarkModeAtom, skinAtom, contentWidthAtom, menuTypeAtom, navBarTypeAtom, footerTypeAtom, isMonochromeAtom, menuCollapsedAtom, menuHiddenAtom, mobileMenuAtom, customizerAtom, widthAtom ,breakPointsAtom, themeControllerAtom }