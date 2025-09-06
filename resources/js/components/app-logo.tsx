import AppLogoIcon from './app-logo-icon';

export default function AppLogo() {
  return (
    <>
      <div className="flex h-14">
        <AppLogoIcon className="fill-current text-white dark:text-black" />
      </div>
      <div className="text-center flex-col text-sm hidden md:flex">
        <span className="font-semibold text-xl text-green-900">اللجنة العليا لرعاية المعاقين</span>
        <span className="font-medium text-[8px] uppercase text-green-900">supreme committee for the care of the disabled</span>
      </div>
    </>
  );
}
