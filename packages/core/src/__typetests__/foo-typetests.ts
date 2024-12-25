import { foo } from '../foo';

// [DESCRIBE] foo
{
    {
        const result = foo();

        result satisfies string;
    }
}
