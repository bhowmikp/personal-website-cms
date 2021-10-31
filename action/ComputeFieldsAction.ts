import { useDocumentOperation } from '@sanity/react-hooks';

export const ComputeAction = (props) => {
    const { patch } = useDocumentOperation(props.id, props.type);
    let allText = "";
    let generatedTableOfContents = [];
    let content = props.draft === null ? props.published : props.draft;

    if (content !== null && "body" in content) {
        content.body.map((entry) => {
            if (entry.children !== undefined) {
                entry.children.map((parentOfText) => {
                    allText += " " + parentOfText.text;

                    switch (entry.style) {
                        case 'h1':
                            generatedTableOfContents.push({ _key: entry._key, sectionName: parentOfText.text, sectionId: parentOfText.text.replaceAll(' ', '-'), sectionLevel: 1 });
                            break;
                        case 'h2':
                            generatedTableOfContents.push({ _key: entry._key, sectionName: parentOfText.text, sectionId: parentOfText.text.replaceAll(' ', '-'), sectionLevel: 2 });
                            break;
                        case 'h3':
                            generatedTableOfContents.push({ _key: entry._key, sectionName: parentOfText.text, sectionId: parentOfText.text.replaceAll(' ', '-'), sectionLevel: 3 });
                            break;
                    }
                })
            }
        });
    }

    return {
        label: 'Compute Fields',
        onHandle: () => {
            patch.execute([
                { set: { readingTime: Math.ceil(allText.split(" ").length / 240) } },
                { set: { tableOfContents: generatedTableOfContents } }
            ]);
        }
    }
}

