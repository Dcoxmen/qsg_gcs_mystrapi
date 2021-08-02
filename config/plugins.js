module.exports = {
    upload: {
        provider: 'google-cloud-storage',
        providerOptions: {
            bucketName: 'qsg_pdf_bucket',
            publicFiles: true,
            uniform: true,
            basePath: '',
        },
    },
    //...
}