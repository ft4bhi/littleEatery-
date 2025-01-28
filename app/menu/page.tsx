"use client"
// sahdjhdjdsjdsjdjdwjdnwj
import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Loader, FileText } from 'lucide-react';

// Set worker URL correctly using unpkg CDN
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

interface PDFDocumentLoadSuccess {
    numPages: number;
}

const Menu = () => {
    const [numPages, setNumPages] = useState<number | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [scale, setScale] = useState(1);  // The scale factor for fitting pages

    // Set the scale dynamically based on the screen width and height
    useEffect(() => {
        const updateScale = () => {
            const screenWidth = window.innerWidth;
            const screenHeight = window.innerHeight;
            const baseWidth = 1500;  // The width that works well for desktop
            const baseHeight = 1200;  // The height that works well for desktop
            const widthScale = screenWidth / baseWidth;
            const heightScale = screenHeight / baseHeight;

            // Set the scale to the minimum of both width and height scale to fit the page
            const newScale = Math.min(widthScale, heightScale, 1); // Ensure it doesn't exceed the original size
            setScale(newScale);
        };

        // Update scale on window resize
        updateScale();
        window.addEventListener('resize', updateScale);

        // Clean up the event listener
        return () => window.removeEventListener('resize', updateScale);
    }, []);

    const onDocumentLoadSuccess = ({ numPages }: PDFDocumentLoadSuccess) => {
        setNumPages(numPages);
        setLoading(false);
        setError(null);
    };

    const onDocumentLoadError = (error: Error) => {
        setLoading(false);
        setError(error.message);
    };

    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
            <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-4 overflow-hidden">
                {/* Loading State */}
                {loading && (
                    <div className="flex flex-col items-center justify-center py-12">
                        <Loader className="w-8 h-8 animate-spin text-blue-500 mb-4" />
                        <p className="text-gray-600">Loading PDF...</p>
                    </div>
                )}

                {/* Error State */}
                {error && (
                    <div className="flex flex-col items-center justify-center py-12">
                        <FileText className="w-16 h-16 text-red-500 mb-4" />
                        <p className="text-gray-600 mb-4">Unable to load PDF</p>
                        <a
                            href="./menu/orm.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                        >
                            Open PDF in New Tab
                        </a>
                    </div>
                )}

                {/* PDF Document */}
                {!error && (
                    <Document
                        file="./menu/orm.pdf"
                        onLoadSuccess={onDocumentLoadSuccess}
                        onLoadError={onDocumentLoadError}
                        loading={null}
                        className="flex justify-center w-full"
                    >
                        <div className="flex flex-col gap-4 overflow-y-auto max-h-screen">
                            {/* Render all pages stacked vertically */}
                            {numPages &&
                                Array.from(new Array(numPages), (_, index) => (
                                    <Page
                                        key={index}
                                        pageNumber={index + 1}
                                        loading={null}
                                        className="max-w-full w-full mx-auto my-4"
                                        scale={scale}  // Use the dynamic scale factor
                                        renderTextLayer={false}
                                        renderAnnotationLayer={false}
                                    />
                                ))
                            }
                        </div>
                    </Document>
                )}
            </div>
        </div>
    );
};

export default Menu;
