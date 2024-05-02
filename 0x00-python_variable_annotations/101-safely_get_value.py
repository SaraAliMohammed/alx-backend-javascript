#!/usr/bin/env python3
''' Module that contains method that safely gets value from dictionary. '''
from typing import Mapping, Any, Union, TypeVar, Optional

T = TypeVar('T')


def safely_get_value(dct: Mapping, key: Any,
                     default: Optional[T] = None) -> Union[Any, T]:
    ''' Return value from dictionary '''
    if key in dct:
        return dct[key]
    else:
        return default
