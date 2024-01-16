import webpack from 'webpack';
import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
    stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/preset-scss',
        '@storybook/addon-styling',
        '@storybook/addon-mdx-gfm'
    ],
    features: {
        storyStoreV7: true
    },
    framework: {
        name: '@storybook/react-webpack5',
        options: {}
    },
    // staticDirs: [{from: '../src/assets', to: 'public/'}],
    docs: {
        autodocs: true
    },
    webpackFinal: async (config) => {
        config.plugins?.push(
            new webpack.DefinePlugin({
                'process.env.STORYBOOK': true
            })
        );

        const imageRule = config.module?.rules?.find(rule => {
            const test = (rule as { test: RegExp }).test;

            if (!test) {
                return false;
            }

            return test.test('.svg');
        }) as { [key: string]: any };

        imageRule.exclude = /\.svg$/;

        config.module?.rules?.push({
            test: /\.svg$/,
            use: [
                {
                    loader: '@svgr/webpack',
                    options: {
                        icon: true
                    }
                }
            ]
        });

        return config;
    }
};

export default config;
