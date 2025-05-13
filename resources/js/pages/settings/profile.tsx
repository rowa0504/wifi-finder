import { type BreadcrumbItem, type SharedData } from '@/types';
import { Transition } from '@headlessui/react';
import { Head, useForm, usePage } from '@inertiajs/react';
import { FormEventHandler } from 'react';

import DeleteUser from '@/components/delete-user';
import HeadingSmall from '@/components/heading-small';
import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { UserInfo } from '@/components/user-info';
import AppLayout from '@/layouts/app-layout';
import SettingsLayout from '@/layouts/settings/layout';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Profile settings',
        href: '/settings/profile',
    },
];

type ProfileForm = {
    name: string;
    email: string;
};

export default function Profile() {
    const { auth } = usePage<SharedData>().props;

    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm<Required<ProfileForm>>({
        name: auth.user.name,
        email: auth.user.email,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        patch(route('profile.update'), {
            preserveScroll: true,
        });
    };

    const {
        setData: setAvatarData,
        post: postAvatar,
        processing: avatarUploading,
        errors: avatarErrors,
        reset: resetAvatarForm,
    } = useForm<{ avatar: File | null }>({
        avatar: null,
    });

    const handleAvatarUpload: FormEventHandler = (e) => {
        e.preventDefault();

        // アバターアップロードのリクエストを送信
        postAvatar(route('profile.avatar.upload'), {
            forceFormData: true,
            preserveScroll: true,
            onSuccess: () => {
                // アップロード後にアバターURLを更新
                // If you need to update the avatar in the UI, you should refetch user data or update state accordingly.
                resetAvatarForm();
            },
        });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Profile settings" />

            <SettingsLayout>
                <div className="space-y-6">
                    <HeadingSmall title="Profile information" description="Update your name and email address" />

                    <form onSubmit={submit} className="space-y-6">
                        <div className="grid gap-2">
                            <Label htmlFor="name">Name</Label>

                            <Input
                                id="name"
                                className="mt-1 block w-full"
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                                required
                                autoComplete="name"
                                placeholder="Full name"
                            />

                            <InputError className="mt-2" message={errors.name} />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="email">Email address</Label>

                            <Input
                                id="email"
                                type="email"
                                className="mt-1 block w-full"
                                value={data.email}
                                required
                                autoComplete="username"
                                disabled
                            />

                            <InputError className="mt-2" message={errors.email} />
                        </div>

                        <div className="mt-6 space-y-6 border-t pt-6">
                            <HeadingSmall title="Profile image" description="Update your profile image" />
                            <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                                <UserInfo user={auth.user} showEmail={true} />
                            </div>

                            {/* ここで画像アップロードを行うボタン */}
                            <div className="grid gap-2">
                                <Label htmlFor="avatar">Profile image</Label>
                                <Input
                                    id="avatar"
                                    type="file"
                                    name="avatar"
                                    accept="image/*"
                                    onChange={(e) => setAvatarData('avatar', e.currentTarget.files?.[0] ?? null)}
                                />
                                {avatarErrors.avatar && <InputError className="mt-2" message={avatarErrors.avatar} />}
                            </div>

                            <Button
                                type="button"
                                variant="outline"
                                onClick={handleAvatarUpload}
                                disabled={avatarUploading}
                            >
                                {avatarUploading ? 'Uploading...' : 'Upload'}
                            </Button>
                        </div>

                        <div className="flex items-center gap-4">
                            <Button disabled={processing}>Save</Button>

                            <Transition
                                show={recentlySuccessful}
                                enter="transition ease-in-out"
                                enterFrom="opacity-0"
                                leave="transition ease-in-out"
                                leaveTo="opacity-0"
                            >
                                <p className="text-sm text-neutral-600">Saved</p>
                            </Transition>
                        </div>
                    </form>
                </div>

                <DeleteUser />
            </SettingsLayout>
        </AppLayout>
    );
}
