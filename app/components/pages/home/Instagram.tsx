import { Link } from '~/components/global/Link';

// instagramPosts.ts
export const INSTAGRAM_POSTS = [
    {
        image: 'images/instagram/0.jpg',
        url: 'https://www.instagram.com/p/DKB7e1HqGeU/',
    },
    {
        image: 'images/instagram/1.jpg',
        url: 'https://www.instagram.com/reel/DRKbUCviNyQ/',
    },
    {
        image: 'images/instagram/2.jpg',
        url: 'https://www.instagram.com/reel/DObTOXmiIHo/',
    },
    {
        image: 'images/instagram/3.jpg',
        url: 'https://www.instagram.com/p/DNxnHvw0HEx/',
    },
    {
        image: 'images/instagram/4.jpg',
        url: 'https://www.instagram.com/p/DNP43Zdq9oH/',
    },
    {
        image: 'images/instagram/5.jpg',
        url: 'https://www.instagram.com/p/DMUrzq6qgjM/',
    },
    {
        image: 'images/instagram/6.jpg',
        url: 'https://www.instagram.com/p/DLxUMC_KE-m/',
    },
    {
        image: 'images/instagram/7.jpg',
        url: 'https://www.instagram.com/p/DLC0lBwq6mD/',
    },
    {
        image: 'images/instagram/8.jpg',
        url: 'https://www.instagram.com/p/DKxXirKqdIn/',
    },
    {
        image: 'images/instagram/9.jpg',
        url: 'https://www.instagram.com/p/DKZdd8dqkGL/',
    },
];

export function InstagramHeader() {
    return (
        <div className="w-full bg-white px-4 py-12 sm:py-16">
            <div className="mx-auto max-w-5xl w-fit">
                {/* Heading */}
                <h2 className="text-center font-black leading-tight text-[1.7rem] sm:text-3xl md:text-4xl lg:text-5xl">
                    Открий още трансформации
                    <br className="hidden sm:block" />в инстаграм профила ни!
                </h2>

                {/* Profile strip */}
                <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8 rounded-2xl border border-neutral-200 px-4 py-5 sm:px-6 md:px-8 shadow-sm">
                    {/* Avatar */}
                    <div className="flex justify-center sm:justify-start w-full sm:w-auto">
                        <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-linear-to-tr from-pink-500 via-red-500 to-yellow-400 p-0.5 flex items-center justify-center shrink-0">
                            <div className="h-full w-full rounded-full bg-white overflow-hidden flex items-center justify-center">
                                <img
                                    src="/images/instagram/avatar.jpg" // change to your logo/avatar
                                    alt="Royal Decorators Instagram Avatar"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Text block */}
                    <div className="flex-1 w-full">
                        {/* Name + handle */}
                        <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-2 text-center sm:text-left">
                            <span className="font-semibold text-base sm:text-lg">
                                Royal Decorators
                            </span>
                            <span className="text-xs sm:text-sm text-neutral-500">
                                @royal_decorators_bg
                            </span>
                        </div>

                        {/* Stats */}
                        <div className="mt-3 flex flex-wrap justify-center sm:justify-start gap-4 text-xs sm:text-sm">
                            <div>
                                <span className="font-semibold">143</span>{' '}
                                <span className="text-neutral-500">Posts</span>
                            </div>
                            <div>
                                <span className="font-semibold">272</span>{' '}
                                <span className="text-neutral-500">
                                    Followers
                                </span>
                            </div>
                            <div>
                                <span className="font-semibold">993</span>{' '}
                                <span className="text-neutral-500">
                                    Following
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Follow button */}
                    <div className="w-full sm:w-auto flex justify-center sm:justify-end">
                        <Link
                            href="https://www.instagram.com/royal_decorators_bg/"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex w-full sm:w-auto items-center justify-center rounded-lg bg-[#0095F6] px-8 py-2.5 text-sm font-semibold text-white hover:bg-[#0081d6] transition-colors"
                        >
                            Follow
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function InstagramSection() {
    return (
        <section className="w-screen overflow-hidden py-10">
            <InstagramHeader />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-0">
                {INSTAGRAM_POSTS.map((post) => (
                    <a
                        key={post.url}
                        href={post.url}
                        target="_blank"
                        rel="noreferrer"
                        className="block relative group"
                    >
                        <div className="aspect-square overflow-hidden">
                            <img
                                src={post.image || '/placeholder.svg'}
                                alt=""
                                className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                            />
                        </div>
                        <img
                            src="/images/instagram/icon.svg"
                            alt="Instagram Post"
                            className="absolute top-2 right-2 w-6 h-6 text-white drop-shadow-lg"
                        />
                    </a>
                ))}
            </div>
        </section>
    );
}
