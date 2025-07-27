import AppLogoIcon from './app-logo-icon';

export default function AppLogo() {
  return (
    <>
      <div className="flex aspect-square h-8 w-8">
        <AppLogoIcon className="h-8 w-8 fill-current text-white dark:text-black" />
      </div>
      <div className="mr-2 grid flex-1 text-left text-sm hidden md:block">
        <span className="mb-0.5 truncate leading-tight font-semibold">مركز البحوث الهندسية وتقنية المعلومات</span>
      </div>
    </>
  );
}
