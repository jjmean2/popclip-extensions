import os


def remove_or_add_comma_for_number(number):
    """ remove or add for number string"""
    if ',' in number:
        return number.replace(',', '')

    chunks = []
    while len(number) > 3:
        chunks.append(number[-3:])
        number = number[:-3]
    chunks.append(number)

    return ','.join(reversed(chunks))


print(remove_or_add_comma_for_number(os.environ['POPCLIP_TEXT']), end="")
