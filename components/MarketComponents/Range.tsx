
export default function () {
    return (
        <div>
            <input className="w-full h-2 bg-neutral-700 rounded-lg appearance-none cursor-pointer dark:bg-neutral-700" type="range" name="range" id="range" />
            <div className="flex justify-between">
                <span className="text-sm text-gray-500 dark:text-gray-400">0%</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">100%</span>
            </div>
        </div>
    )
}