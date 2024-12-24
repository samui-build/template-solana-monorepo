import { Box, Flex, Heading } from '@radix-ui/themes';

export function Nav() {
    return (
        <Box
            style={{
                backgroundColor: 'var(--gray-1)',
                borderBottom: '1px solid var(--gray-a6)',
                zIndex: 1,
            }}
            position="sticky"
            p="3"
            top="0"
        >
            <Flex gap="4" justify="between" align="center">
                <Box flexGrow="1">
                    <Heading as="h1" size={{ initial: '4', xs: '6' }} truncate>
                        samui-build React App{' '}
                    </Heading>
                </Box>
            </Flex>
        </Box>
    );
}
