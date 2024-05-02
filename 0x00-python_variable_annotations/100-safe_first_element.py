#!/usr/bin/env python3
''' Module that contains Augmented code with
the correct duck-typed annotations. '''
from typing import Sequence, Any, Union


def safe_first_element(lst: Sequence[Any]) -> Union[Any, NoneType]:
    ''' Return the first element of a list or None if the list is empty. '''
    if lst:
        return lst[0]
    else:
        return None
