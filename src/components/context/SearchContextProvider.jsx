import { useCallback, useMemo, useState } from 'react';
import { SearchContext } from '../../context/searchContext';

// TODO(perf): Every consumer of this context (SearchInput, Home) re-renders
// whenever the context value changes. The notes below mark where that can be
// reduced.
export const SearchContextProvider = ({ children }) => {
  // TODO(perf): This state changes on every keystroke, so Home re-runs its
  // product filter on every key press. Options:
  //   - In Home, read `useDeferredValue(productSearch)` so filtering doesn't
  //     block typing.
  //   - Or debounce the value (~300ms) before Home uses it. (custom hook )
  const [productSearch, setProductSearch] = useState('');

  // TODO(perf): These handlers are new functions on every render. Wrap them in
  // `useCallback`, or skip the wrappers: `setProductSearch` is already stable
  // and `handleClearBox` is just `() => setProductSearch('')`.
  const handleSearch = useCallback((e) => {
    setProductSearch(e);
  }, []); // contrato 

  const handleClearBox = useCallback(() => {
    setProductSearch('');
  }, []);
  // TODO(perf): The `value` object below is rebuilt on every render, so all
  // consumers re-render even when nothing in it changed (for example when a
  // parent of this provider re-renders). Memoize it:
  const value = useMemo(
    () => ({ productSearch, handleSearch, handleClearBox }),
    [productSearch, handleSearch, handleClearBox],
  );
  //
  // TODO(perf): Consider splitting state and actions into two contexts
  // (SearchStateContext / SearchActionsContext). Components that only need
  // the actions would then not re-render when the search text changes.
  //
  // TODO(perf): Alternatively, move this into the existing zustand store
  // (src/lib/store.js). Its selectors re-render only the components that read
  // `productSearch`, so this provider isn't needed.
  return <SearchContext value={value}>{children}</SearchContext>;
  // return <SearchContext.Provider>SearchContextProvider</SearchContext.Provider>;
};
