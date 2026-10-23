# AI Rules for Angular Template

## Tech Stack

This is an Angular 20 application using:
- **Framework**: Angular 20 (standalone components)
- **Language**: TypeScript
- **Styling**: CSS
- **Build Tool**: Angular CLI with Webpack
- **Package Manager**: npm

## Architecture

The application follows Angular's component-based architecture:
- Standalone components (no NgModules required)
- Component-scoped styling
- TypeScript for type safety
- Reactive programming with RxJS (built into Angular)

## Key Conventions

### File Structure
- Components use the pattern: `component-name.component.ts/html/css`
- Services use the pattern: `service-name.service.ts`
- All source code is in the `src/` directory
- Components are in `src/app/`

### Coding Standards
- Use TypeScript strict mode
- Follow Angular Style Guide naming conventions
- Use standalone components (no NgModules)
- Prefer OnPush change detection strategy for performance
- Use Angular's built-in directives (@if, @for, @switch)

### Component Structure
```typescript
@Component({
  selector: 'app-component-name',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './component-name.component.html',
  styleUrl: './component-name.component.css'
})
```

### Best Practices
- Keep components small and focused
- Use services for business logic
- Leverage Angular's dependency injection
- Use reactive forms for complex form handling
- Implement proper error handling with RxJS operators

## Development Workflow

1. **Development Server**: `npm start` or `ng serve`
2. **Build**: `npm run build` or `ng build`
3. **Generate Components**: `ng generate component component-name`
4. **Generate Services**: `ng generate service service-name`

## Angular-Specific Features

- **Signals**: Available for reactive state management
- **Control Flow**: Use @if, @for, @switch instead of *ngIf, *ngFor
- **Standalone APIs**: No need for NgModules
- **Dependency Injection**: Use inject() function or constructor injection
- **Route Guards**: Use functional guards
- **HTTP Client**: Use HttpClient with interceptors for API calls

## Performance Considerations

- Use OnPush change detection where possible
- Lazy load feature modules
- Implement virtual scrolling for large lists
- Use trackBy functions in @for loops
- Optimize bundle size with tree shaking

## Dyad.sh Compatibility

This template is optimized for Dyad.sh environment:
- Minimal dependencies
- Fast development server startup
- Efficient production builds
- No server-side rendering (client-side only)