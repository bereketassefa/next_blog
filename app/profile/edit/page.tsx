import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function InputWithLabel() {
  return (
    <form className="space-y-8 divide-y divide-gray-200 my-3">
      <div className="space-y-8 divide-y divide-gray-800 sm:space-y-5">
        <div>
          <div>
            <h3 className="text-lg leading-6 font-medium text-foreground">
              Profile
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
              This information will be displayed publicly so be careful what you
              share.
            </p>
          </div>

          <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-border sm:pt-5">
              <label
                htmlFor="username"
                className="block text-sm font-medium  sm:mt-px sm:pt-2"
              >
                Username
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <div className="max-w-lg flex rounded-md shadow-sm">
                  <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                    workcation.com/
                  </span>
                  <Input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="username"
                    className="flex-1 block w-full  min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
                  />
                </div>
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-border sm:pt-5">
              <label
                htmlFor="about"
                className="block text-sm font-medium  sm:mt-px sm:pt-2"
              >
                About
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  className="max-w-lg shadow-sm block w-full  sm:text-sm border border-gray-300 rounded-md"
                  defaultValue={""}
                />
                <p className="mt-2 text-sm text-gray-500">
                  Write a few sentences about yourself.
                </p>
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-center sm:border-t sm:border-border sm:pt-5">
              <label htmlFor="photo" className="block text-sm font-medium ">
                Photo
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <div className="flex items-center">
                  <span className="h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                    <svg
                      className="h-full w-full text-gray-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </span>
                  <Button variant={"secondary"} className="mx-3">
                    Change
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
          <div>
            <h3 className="text-lg leading-6 font-medium ">
              Personal Information
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
              Use a permanent address where you can receive mail.
            </p>
          </div>
          <div className="space-y-6 sm:space-y-5">
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-border sm:pt-5">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium  sm:mt-px sm:pt-2"
              >
                First name
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <Input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="max-w-lg block w-full shadow-sm  sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-border sm:pt-5">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium  sm:mt-px sm:pt-2"
              >
                Last name
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <Input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="max-w-lg block w-full shadow-sm  sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-border sm:pt-5">
              <label
                htmlFor="email"
                className="block text-sm font-medium  sm:mt-px sm:pt-2"
              >
                Email address
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block max-w-lg w-full shadow-sm  sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-border sm:pt-5">
              <label
                htmlFor="country"
                className="block text-sm font-medium  sm:mt-px sm:pt-2"
              >
                Country
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="max-w-lg block  w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-border sm:pt-5">
              <label
                htmlFor="street-address"
                className="block text-sm font-medium  sm:mt-px sm:pt-2"
              >
                Street address
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <Input
                  type="text"
                  name="street-address"
                  id="street-address"
                  autoComplete="street-address"
                  className="block max-w-lg w-full shadow-sm  sm:text-sm border-border rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-5">
        <div className="flex justify-end">
          <Button type="button" variant={"secondary"} className="mx-5">
            Cancel
          </Button>
          <Button type="submit">Save</Button>
        </div>
      </div>
    </form>
  );
}
