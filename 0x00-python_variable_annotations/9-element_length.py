#!/usr/bin/env python3
''' Module for function with annotated parameters and
return values with appropriate types. '''
from typing import Iterable, Sequence, List, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    ''' Return values with the appropriate types '''
    return [(i, len(i)) for i in lst]
