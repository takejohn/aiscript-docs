hljs.registerLanguage('aiscript', function () {
    const lineComment = hljs.C_LINE_COMMENT_MODE;
    const blockComment = hljs.C_BLOCK_COMMENT_MODE;

    const expressions = [lineComment, blockComment];

    const keywords = {
        $pattern: "[A-Za-z_][0-9A-Za-z_]*",
        keyword: [
            'each',
            'for',
            'loop',
            'do',
            'while',
            'break',
            'continue',
            'match',
            'case',
            'default',
            'if',
            'elif',
            'else',
            'return',
            'eval',
            'var',
            'let',
            'exists',
        ].join(' '),
        literal: [
            'null',
            'true',
            'false',
        ].join(' '),
    };

    const stringEscape = {
        className: 'char.escape',
        begin: '\\\\[\\s\\S]',
    }

    const doubleQuoteString = {
        className: 'string',
        begin: '"',
        end: '"',
        contains: [stringEscape],
    };
    expressions.push(doubleQuoteString);

    const singleQuoteString = {
        className: 'string',
        begin: '\'',
        end: '\'',
        contains: [stringEscape],
    };
    expressions.push(singleQuoteString);

    const template = {
        className: 'string',
        begin: '`',
        end: '`',
        contains: [
            stringEscape,
            {
                className: 'subst',
                begin: '\\{',
                end: '\\}',
                keywords,
                contains: expressions,
            },
        ],
        relevance: 1,
    };
    expressions.push(template);

    const number = {
        className: 'number',
        begin: '[0-9]+(?:\\.[0-9]+)?',
    };
    expressions.push(number);

    const property = {
        className: 'property',
        begin: '(?<=\\.)[A-Za-z_]+',
    };
    expressions.push(property);

    const definitionIdentifier = {
        className: 'title',
        begin: '[A-Za-z_][0-9A-Za-z_]*',
    };

    const metaHeader = {
        className: 'meta',
        begin: '###',
        relevance: 10,
    };

    const namespaceHeader = {
        begin: '::',
        end: '(?=\\{)',
        contains: [definitionIdentifier],
        relevance: 1,
    };

    const group = {
        begin: '\\(',
        end: '\\)',
        contains: expressions,
    };
    expressions.push(group);

    const params = {
        begin: '\\(',
        end: '\\)',
        contains: [
            {
                className: 'params',
                begin: '[A-Za-z_][0-9A-Za-z_]*',
            },
            doubleQuoteString,
            singleQuoteString,
            template,
            number,
            group,
            lineComment,
            blockComment,
            property,
        ],
    };

    const functionHeader = {
        className: 'function',
        begin: '@',
        end: '(?=\\{)',
        contains: [definitionIdentifier, params],
        relevance: 10,
    };

    return {
        keywords,
        contains: [
            metaHeader,
            namespaceHeader,
            singleQuoteString,
            doubleQuoteString,
            template,
            lineComment,
            blockComment,
            number,
            functionHeader,
            property,
        ],
    };
});
