
/**@type {import('@commitlint/types').UserConfig}*/

// JIRA-123:feat:aldsfkj

const config = {
    extends: ['@commitlint/config-conventional'],
    parserPreset:{
        parserOpts:{
            headerPattern: /^(PROJ-\d+):(\w+):(.+)$/,
            headerCorrespondence: ['jira', 'type', 'subject']
        }
    },
    plugins:[
        {
            rules:{
                'jira-id-check': (parse) => {
                    const jira = parse.jira


                    const isValid = Boolean(jira && /^PROJ-\d+$/.test(jira))

                    return[
                        isValid,
                        `Commit message should have JIRA ID\n`+
                        `The correct formate is PROJ-123:feat:commit message.`
                    ]
                }
            }
        }
    ],
    rules:{
        'jira-id-check': [2, 'always'],
        'type-enum':[
            2,
            'always',
            [
                'fix',      // bug fix
                'feat',     // new feature
                'chore',    // maintenance - deps update etc.
                'docs',     // documentation
                'style',    // formatting - no logic change
                'refactor', // code restructure
                'perf',     // performance improvement
                'test',     // tests add/update
                'revert',   // previous commit revert
                'ci',       // CI/CD changes
            ]
        ],
        'subject-case': [2, 'always', 'lower-case'],
        'subject-empty': [2, 'never'],
        'type-empty': [2, 'never']
    }
}

export default config